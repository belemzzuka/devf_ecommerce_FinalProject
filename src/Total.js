import React from 'react';
import { Button, makeStyles} from "@material-ui/core";

const usesStyles = makeStyles((theme) => ({
    root:{
        display: "flex",
        flexDirection: "column",
        alingItems: "center",
        justifyContent: "center",
        height: "20vh",

        button:{
            marginTop: "2rem"
        }

    }
}))

export default function Total() {

    const classes = usesStyles();

    return (
        <div className={classes.root}>
            <h5>Total items: 3</h5>
            <h5>$600</h5>

            <Button className={classes.button} variant="contained" color="secondary">Verificar</Button>
        </div>
    )
}