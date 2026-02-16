import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

interface InstagramIconProps {
    className?: string;
}

const InstagramIcon = ({ className }: InstagramIconProps) => {
    return <FontAwesomeIcon icon={faInstagram} className={className} />;
};

export default InstagramIcon;
