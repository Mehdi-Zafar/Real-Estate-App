import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import { Avatar } from '@mui/material';
import Link from 'next/link';

const Property = ({property:{coverPhoto,price,rentFrequency,rooms,title,baths,area,agency,isVerified,externalID}}) => {
    return (
        <Link href={`/property/${externalID}`} passHref>
        <Card elevation={4} sx={{ maxWidth: {xs:260,sm:345},margin:3 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="250"
            image={coverPhoto.url}
            alt="green iguana"
          />
          <CardContent>
            <div className="price-logo">
                <Typography gutterBottom variant="h6" component="div">
                {isVerified ?<GoVerified/>:""} AED {millify(price)} {rentFrequency && '/ monthly'}
                </Typography>
                <Avatar
                alt="agency"
                src={agency.logo.url}
                sx={{ width: 40, height: 40 }}
                />
            </div>
            <Typography variant="h6" color="text.secondary" align="center">
              {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {title.length > 30 ? `${title.substring(0,30)}...`:title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      </Link> 
     );
}
 
export default Property;