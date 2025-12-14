import image from '../assets/dark_souls_3s.jpg';

function Projects () {
    return (
        <div className="text-center mt-10">
            <h1 className="text-4xl font-bold mb-4 text-black">Proyek Saya</h1>
            <p className="text-lg text-gray-700">
                Berikut adalah beberapa proyek yang telah saya kerjakan:
            </p>

            <div>
              <img src={image} a
              lt="Ligmas"
              className='mx-auto' />
              
            </div>

            <p className="text-lg text-gray-700 mt-6">
              Known as the Ashen One or Unkindled, is a failed undead who tried to link the First Flame in a past life but was burned to ash; 
              they are resurrected to hunt down four powerful Lords of Cinder (who previously linked the fire but now refuse) 
              and return their ashes to their thrones, forcing them to fulfill their duty to prolong the fading Age of Fire, essentially acting as the world's last hope to stave off darkness.
            </p>
        </div>
    );
}

export default Projects;