import { OwnProps } from "./types";
import { Card, Label } from "./styles";

export default function ItemCard(props: OwnProps) {
  const { alt = "Sem Imagem", onClick, src, title, price } = props;
  return (
    <>
      <Card>
        <img src={`data:image/png;base64,${src}`} alt={alt} onClick={onClick} />
        <Label>{title}</Label>
        <Label>{price}</Label>
      </Card>
    </>
  );
}
