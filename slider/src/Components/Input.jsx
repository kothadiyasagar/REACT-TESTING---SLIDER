import eye from './eye.svg'
import '../App.css'

export const Input = ({
  type,
  size,
  variant,
  rightLogo,
  rightLogoOnClick,
  onChange,
}) => {
  return (
    <div className="inputContainer">
      {/* Add Right Logo */}
      <input data-testid="email-input" type={type} className={`input`}   onChange={onChange}/>
      <img style={{marginLeft:"-30px"}} src={rightLogo} variant={variant}   size={size}  onClick={()=>{rightLogoOnClick(true)}}   />
    </div>
  );
};