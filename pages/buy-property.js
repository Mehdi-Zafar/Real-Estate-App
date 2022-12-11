import Property from '../comps/Property'
import { baseUrl, fetchApi } from '../utils/fetchApi'
import Head from 'next/head'

const BuyProperty = ({propertiesForSale}) => {
    return ( 
        <>
        <Head>
        <title>Real Estate | Buy Property</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
            <div className="sale-heading">
                <h1>Property for Sale</h1>
                <p>Buy a home</p>
            </div>
            <div className="card-container">{propertiesForSale.map((property)=>{
            return <Property property={property} key={property.id}/>  
            })}</div>
        </div>
        </>
     );
}
 
export default BuyProperty;

export async function getStaticProps(){
    const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale`)
  
    return {
      props:{
        propertiesForSale:propertyForSale?.hits,
      }
    }
  }