    import styles from './card.module.css'
    import Image from 'next/image'

    export default function Card(){
        return(
            <div className={styles.card}>
                <div className={styles.cardimg}>
                    <Image src={'/img/room1.jpg'} 
                        alt='Product Picture'
                        fill={true}
                        objectFit='cover'
                    />
                </div>
                <div className={styles.cardText}>
                        Viridian Dome Hotel
                    <div className={styles.cardDesc}>
                        Exchange vows beside a stunning windows. This botanical ballroom features marble floors and panoramic views for a sophisticated event.
                    </div>
                    </div>
            </div>
        )
    }