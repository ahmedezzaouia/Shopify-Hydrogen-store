import {
  useShopQuery,
  flattenConnection,
  ProductProviderFragment,
  Image,
  Link,
} from '@shopify/hydrogen';
import gql from 'graphql-tag';

import Layout from '../components/Layout.server';
import FeaturedCollection from '../components/FeaturedCollection';
import ProductCard from '../components/ProductCard';
import Welcome from '../components/Welcome.server';

import Carousel from '../components/carousel';

export default function Index({country = {isoCode: 'US'}}) {
  const {data} = useShopQuery({
    query: QUERY,
    variables: {
      country: country.isoCode,
    },
  });
  console.log('before flutten');
  const collections = data ? flattenConnection(data.collections) : [];
  console.log('collections', collections);

  const featuredProductsCollection = collections[0];
  const featuredProducts = featuredProductsCollection
    ? flattenConnection(featuredProductsCollection.products)
    : null;

  const featuredCollection =
    collections && collections.length > 1 ? collections[1] : collections[0];

  return (
    <Layout>
      <div className="relative mb-12">
        {/* <Welcome /> */}
        {/* <Carousel /> */}
        <div className="bg-white p-12 shadow-xl rounded-xl mb-10">
          {featuredProductsCollection ? (
            <>
              <div className="flex justify-between items-center mb-8 text-md font-medium">
                <span className="text-black uppercase">
                  {featuredProductsCollection.title}
                </span>
                <span className="hidden md:inline-flex">
                  <Link
                    to={`/collections/${featuredProductsCollection.handle}`}
                    className="text-blue-600 hover:underline"
                  >
                    Shop all
                  </Link>
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {featuredProducts.map((product) => (
                  <div key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              <div className="md:hidden text-center">
                <Link
                  to={`/collections/${featuredCollection.handle}`}
                  className="text-blue-600"
                >
                  Shop all
                </Link>
              </div>
            </>
          ) : null}
        </div>
        {/* <FeaturedCollection collection={featuredCollection} /> */}
      </div>
    </Layout>
  );
}

const QUERY = gql`
  query indexContent(
    $country: CountryCode
    $numCollections: Int = 2
    $numProducts: Int = 3
    $includeReferenceMetafieldDetails: Boolean = false
    $numProductMetafields: Int = 0
    $numProductVariants: Int = 250
    $numProductMedia: Int = 1
    $numProductVariantMetafields: Int = 10
    $numProductVariantSellingPlanAllocations: Int = 0
    $numProductSellingPlanGroups: Int = 0
    $numProductSellingPlans: Int = 0
  ) @inContext(country: $country) {
    collections(first: $numCollections) {
      edges {
        node {
          descriptionHtml
          description
          handle
          id
          title
          image {
            ...ImageFragment
          }
          products(first: $numProducts) {
            edges {
              node {
                ...ProductProviderFragment
              }
            }
          }
        }
      }
    }
  }

  ${ProductProviderFragment}
  ${Image.Fragment}
`;
