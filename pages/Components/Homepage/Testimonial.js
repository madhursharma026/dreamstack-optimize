import Link from 'next/link';
import Image from 'next/image';
import List from '@mui/material/List';
import Logo from '../../media/logo.jpg';
import Avatar from '@mui/material/Avatar';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import QuoteIcon from '../../media/Homepage-Images/QuoteIcon.png';
import styles from '../../../styles/Homepage/IntroSection.module.css';

export default function Testimonial() {
    return (
        <div className={`px-4 py-3 mb-5`}>
            <div className={`${styles.ContainerWidth} py-4`} style={{ maxWidth: "992px" }}>
                <Link href='/' passHref>
                    <span className='d-xl-inline d-none' style={{ marginLeft: '-100px', borderRadius: '100%', paddingTop: '60px', paddingBottom: '60px', paddingLeft: '50px', paddingRight: '50px', background: '#FFF9EA' }}>
                        <Image src={QuoteIcon} alt="Quote Icon" width={50} height={'100%'} />
                    </span>
                </Link>
                <p className={`${styles.h3CustomFont}`} style={{ lineHeight: '1.2' }}>
                    "Dreamstack is an IT services, consulting and business solutions organization that has been partnering with many of the world’s largest businesses for the past decade. We believe innovation and collective knowledge can transform all our futures with greater purpose."
                </p>
                <hr />
                <List style={{ marginTop: '-20px' }}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <Image src={Logo} alt="Dreamstack Logo" width={40} />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Akash Dixit" secondary="CEO. Dreamstack Private Limited" />
                    </ListItem>
                </List>
            </div>
        </div>
    )
}

