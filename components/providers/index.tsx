import { NextUiProvider } from "@/components/providers/next-ui";
import { QueryProvider } from "@/components/providers/react-query";
import { SessionProviderComponent } from "@/components/providers/session";

export const ProvidersContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <SessionProviderComponent>
      <QueryProvider>
        <NextUiProvider>{children}</NextUiProvider>
      </QueryProvider>
    </SessionProviderComponent>
  );
};
