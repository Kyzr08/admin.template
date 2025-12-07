declare module "react-simple-maps" {
  import type { ComponentType, ReactNode, CSSProperties } from "react";

  interface ComposableMapProps {
    projectionConfig?: Record<string, unknown>;
    width?: number;
    height?: number;
    style?: CSSProperties;
    children?: ReactNode;
  }
  export const ComposableMap: ComponentType<ComposableMapProps>;

  interface GeographiesRenderProps {
    geographies: any[];
  }

  interface GeographiesProps {
    geography: string | object;
    children?: (props: GeographiesRenderProps) => ReactNode;
  }
  export const Geographies: ComponentType<GeographiesProps>;

  interface GeographyProps {
    geography: any;
    style?: Record<string, Record<string, string | number>>;
  }
  export const Geography: ComponentType<GeographyProps>;

  interface MarkerProps {
    coordinates: [number, number];
    children?: ReactNode;
  }
  export const Marker: ComponentType<MarkerProps>;
}
