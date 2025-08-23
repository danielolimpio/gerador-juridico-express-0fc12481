import { Helmet } from 'react-helmet-async';

interface JsonLdProps {
  data: object | object[];
}

const JsonLd: React.FC<JsonLdProps> = ({ data }) => {
  const jsonData = Array.isArray(data) ? data : [data];
  
  return (
    <Helmet>
      {jsonData.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item)
          }}
        />
      ))}
    </Helmet>
  );
};

export default JsonLd;