const TOSParapraph: Blocks.TOSParagraph = ({item}) => {
  if (typeof item === 'string' || item instanceof String) return <li>{item}</li>

  return <div style={{marginBottom: "1rem"}}>
    <p>{item.headline}:</p>
    {item.list.map((item, index) => <p key={index}>{item}</p>)}
  </div>
}

export default TOSParapraph;