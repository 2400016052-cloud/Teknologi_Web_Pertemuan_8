import profileImg from '../assets/Fragments_of_Life-Me_and_Myself.webp';

function Home() {
  return (
    <div className="relative text-center mt-10">
      <h1 className="text-4xl font-bold mb-4 text-black">
        Selamat Datang di Portofolio Saya
      </h1>

      <div className="relative inline-block">
        <img
          src={profileImg}
          alt="Foto Profil"
        />

        <div
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            width: '90%',
          }}
        >
          <h1
            style={{
              color: 'white',
              margin: 0,
              fontWeight: 900,
              textShadow: '2px 2px 8px #000',
            }}
          >
            M. Raihan Najwa
          </h1>

          <h4
            style={{
              color: 'white',
              margin: 0,
              fontWeight: 800,
              textShadow: '2px 2px 8px #000',
            }}
          >
            Mahasiswa Sistem Informasi
          </h4>
        </div>
      </div>

      <p className="text-lg text-gray-700 mt-6">
        Saya adalah seorang mahasiswa yang bersemangat untuk belajar tentang pengembangan web.
        Saya suka memecahkan masalah dan menciptakan aplikasi yang berguna bagi orang lain.
      </p>
    </div>
  );
}

export default Home;
