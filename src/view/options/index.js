import React, { useState, Fragment } from 'react';
import IconButton from '@material-ui/core/IconButton';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import GridOffIcon from '@material-ui/icons/GridOff';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
//import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import SaveIcon from '@material-ui/icons/Save';
import { useStyleIcons } from '../../hooks/style';
import Modal from '../modal';
export default function IconButtons({ drawRef }) {
  const classes = useStyleIcons();
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <div className={classes.root}>
        <IconButton color="secondary">
          <SaveIcon />
        </IconButton>
        <IconButton color="secondary" onClick={() => drawRef.current.undo()}>
          <RotateLeftIcon />
        </IconButton>
        <IconButton color="secondary">
          <GridOffIcon />
        </IconButton>
        <IconButton color="secondary" onClick={() => setVisible(true)}>
          <BorderColorIcon />
        </IconButton>
        <IconButton color="secondary">
          <FormatColorFillIcon />
        </IconButton>
        <IconButton color="secondary" onClick={() => drawRef.current.clear()}>
          <AutorenewIcon />
        </IconButton>
      </div>
      <Modal name="Modal" show={visible} />
    </Fragment>
  );
}
