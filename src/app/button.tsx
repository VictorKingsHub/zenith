
type ButtonProps ={
    type: 'button' | "submit";
    title: string;
    icon: string;
    variant: "bg-red-500";
    color: "text-red-500";
}

const Button = ({type, title, icon, variant, color} :ButtonProps) => {
  return (
    <button className={`flexCenter gap-3 bg-gradient-to-r from-red-400 to-red-900 p-2 rounded border-rounded cursor-pointer }`}>
       <label className=" " > {title} </label>
    </button>
  )
}

export default Button
