import "./Titulo.css";

const Titulo = () => {
  return (
      <>
        <h1 id="changing-text">
            Fly me to&nbsp;
            <div id="texts-container">
                <span>
                        Japón<br/>
                        España<br/>
                        Canadá<br/>
                        the Moon
                </span>
            </div>
        </h1>
    </>
  );
};

export default Titulo;