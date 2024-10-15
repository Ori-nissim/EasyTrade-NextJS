export default function ContentContainer(props: React.PropsWithChildren) {
    return <div className="mx-10 mt-4">{props.children}</div>; // Use 'mx-4' for horizontal margin
  }