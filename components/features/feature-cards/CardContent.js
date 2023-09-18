export default function CardContent({ feature }) {
  return (
    <div>
      <h2>{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  );
}
