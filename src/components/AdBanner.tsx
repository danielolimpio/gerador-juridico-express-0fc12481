const AdBanner = () => {
  return (
    <div className="text-center my-8 px-4">
      <div className="relative overflow-hidden rounded-lg mx-auto" style={{ maxWidth: '970px' }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-[90px] object-cover cursor-pointer block"
          poster="https://res.cloudinary.com/da1qwcv4u/image/upload/v1755896024/Sem_t%C3%ADtulo_16_xlycta.jpg"
          onClick={() => window.open('https://solarien.com.br', '_blank')}
          style={{
            width: '970px',
            height: '90px',
            maxWidth: '100%'
          }}
        >
          <source src="https://res.cloudinary.com/da1qwcv4u/video/upload/v1755896024/Sem_t%C3%ADtulo_16_xlycta.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
      </div>
    </div>
  );
};

export default AdBanner;