import React, {FC} from 'react'

type ConfirmButtonProps = {
  title: string;
  onClick: () => void
}

export const ConfirmButton: FC<ConfirmButtonProps> = ({title, onClick}) => {
  return (
   <button onClick={onClick}>{title}</button>
  )
}
