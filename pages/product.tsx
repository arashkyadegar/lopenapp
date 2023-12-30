import ProductComponent from "@/components/product";

export default function Product(rslt: any) {
  return <ProductComponent props={rslt} />;
}
// This gets called on every request
export async function getServerSideProps(context: any) {
  const { id } = context.query;
  const baseURL = process.env.NEXT_PUBLIC_BASEURL;
  const res = await fetch(`${baseURL}/wbproducts/${id}`);
  const repo = await res.json();
  const product = JSON.stringify(repo);
  return { props: { product } };
}
Product.Layout = "Main";
