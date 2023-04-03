import NewsletterSignup from "../components/newsletter/NewsletterSignup";
import PageContent from "../components/pageContent/PageContent";

const NewsletterPage = () => {
  return (
    <PageContent title="Join our awesome newsletter">
      <NewsletterSignup />
    </PageContent>
  );
};

export default NewsletterPage;

export async function action({ request }) {
  const data = await request.formData();
  const email = data.get("email");

  console.log(email);

  return { message: "Signup succesful" };
}
