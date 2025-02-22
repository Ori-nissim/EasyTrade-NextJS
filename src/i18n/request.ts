import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  // Read the locale from cookies
  const locale = cookies().get("NEXT_LOCALE")?.value || "en";

  return {
    locale,
    messages: (await import(`../app/messages/${locale}.json`)).default,
  };
});
