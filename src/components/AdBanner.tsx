const AdBanner = () => {
  return (
    <div className="w-full my-8 text-center">
      <div className="relative overflow-hidden rounded-lg mx-auto inline-block">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="h-[90px] object-cover cursor-pointer block mx-auto"
          poster="https://res.cloudinary.com/da1qwcv4u/image/upload/v1755918058/Sem_t%C3%ADtulo_18_wxefta.jpg"
          onClick={() => window.open('https://solarien.com.br', '_blank')}
          style={{
            width: '970px',
            height: '90px',
            maxWidth: '100%'
          }}
        >
          <source src="https://res.cloudinary.com/da1qwcv4u/video/upload/v1755918058/Sem_t%C3%ADtulo_18_wxefta.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
    </div>
  );
};

export default AdBanner;