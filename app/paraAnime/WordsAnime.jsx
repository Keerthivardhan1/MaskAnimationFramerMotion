import Word from "../components/Paragraph";

const para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo nam saepe, quis odit fuga dolores ipsum necessitatibus velit quia a. Porro eveniet neque fugiat nisi. Ad non harum adipisci illo."
export default function WordsAnime() {
  return (
    <div>
        <div className='h-screen' ></div>
            <Word para={para}/>
        <div className='h-screen' ></div>
    </div>

  )
}
