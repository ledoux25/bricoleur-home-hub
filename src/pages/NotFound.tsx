
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="bricoleur-container pt-24 pb-16 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-6xl font-bold mb-4 text-bricoleur-primary">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-8 text-center max-w-md">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link to="/">
          <Button>Retourner à l'accueil</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
