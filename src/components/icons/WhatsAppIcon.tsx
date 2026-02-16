import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

interface WhatsAppIconProps {
    className?: string;
}

const WhatsAppIcon = ({ className }: WhatsAppIconProps) => {
    return <FontAwesomeIcon icon={faWhatsapp} className={className} />;
};

export default WhatsAppIcon;
