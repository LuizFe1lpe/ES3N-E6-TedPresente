import { Card, Label } from './styles';
import { OwnProps } from "./types";

export default function DonationCard(props: OwnProps) {
    const { onClick } = props;
    return(
        <>
            <Card>
                <img src={require('../../images/donation.png')} alt='Doação' onClick={onClick} />
                <Label>Doar para instituição</Label>
                <Label></Label>
            </Card>
        </>
    );
}