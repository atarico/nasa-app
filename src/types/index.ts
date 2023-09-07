export type PostImage = {
  map(
    arg0: (
      item: import("react").JSX.IntrinsicAttributes & PostImage,
      index: import("react").Key
    ) => import("react").JSX.Element
  ): import("react").ReactNode;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: string;
  service_version?: string;
  title?: string;
  url?: string;
};
