import Page, {
  generateMetadata as generateAliasMetadata,
  generateStaticParams as generateAliasStaticParams,
} from "../../images/[slug]/page";

export const revalidate = 3;
export const generateMetadata = generateAliasMetadata;
export const generateStaticParams = generateAliasStaticParams;
export default Page;
