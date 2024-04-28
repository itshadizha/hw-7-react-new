import Button from "./Button";

const GorgeousButtons = () => {
  return (
    <div style={{margin: "20px"}}>
      <Button variant="outlined">outlined </Button>
      <Button variant="contained">contained</Button>
      <Button variant="warning">warning </Button>
      <Button variant="danger">danger </Button>
    </div>
  );
};

export default GorgeousButtons;
