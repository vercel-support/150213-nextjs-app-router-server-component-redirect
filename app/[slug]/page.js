import ServerRedirectComponent from '/components/ServerRedirectComponent';
export default function Page({ params }) {
  return <ServerRedirectComponent slug={params.slug} />;
}

export async function generateStaticParams() {
  return [
    {
      slug: '/redirectMeStatic'
    }
  ];
}
