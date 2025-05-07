import { Svg } from "./Svg";

export const Icon = ({ name, className, size }) => {
  switch (name) {
    case "arrow-up":
      return (
        <Svg className={className} size={size}>
          <path d="M25.91 1.61c-.15-1.03-1.1-1.74-2.13-1.59l-16.77 2.43c-1.03.15-1.74 1.1-1.59 2.13s1.1 1.74 2.13 1.59l14.9-2.16 2.16 14.9c.15 1.03 1.1 1.74 2.13 1.59s1.74-1.1 1.59-2.13l-2.43-16.77zM5.27 30.15l20.28-27.14-3.02-2.25-20.28 27.14 3.02 2.25z" />
        </Svg>
      );

    default:
  }
};
