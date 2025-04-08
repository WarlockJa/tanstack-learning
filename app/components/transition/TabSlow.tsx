const items = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
];

export default function TabSlow() {
  return (
    <div>
      <h2>Slow Tab</h2>
      <ul>
        {items.map((item) => (
          <SlowItem key={item} item={item} />
        ))}
      </ul>
    </div>
  );
}

function SlowItem({ item }: { item: string }) {
  const startTime = performance.now();
  while (performance.now() - startTime < 100) {}

  return <li>{item}</li>;
}
