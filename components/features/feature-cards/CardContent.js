export default function CardContent({ feature, first }) {
  return (
    <div className={`text-center mx-10 ${first ? 'mb-16' : ''}`}>
      <h2 className={`font-bold mb-4 ${first ? 'text-2xl' : 'text-xl'}`}>{feature.title}</h2>
      <p>{feature.description}</p>
    </div>
  );
}
