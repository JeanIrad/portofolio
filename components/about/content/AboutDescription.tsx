interface AboutDescriptionProps {
  content: string;
}

export default function AboutDescription({ content }: AboutDescriptionProps) {
  return <p className="text-left">{content}</p>;
}
