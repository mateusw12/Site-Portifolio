import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import { socialMediaItems } from '../../constant/socialMediaItems';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Mateus Walz</h2>
                        <img
                            src="https://mitadmissions.org/wp-content/uploads/2018/07/avatar_5492.jpg"
                            alt="Mateus Walz"
                            style={{ height: '250px' }}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            A educação é a chave que abre as portas do conhecimento, transformando vidas e construindo um futuro melhor.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Entre em contato</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                {
                                    socialMediaItems.map(el => (
                                        <ListItem>
                                            <ListItemContent style={{ fontSize: '30px', fontFamily: 'anton' }}>
                                                <i className={el.icon}> {el.value}</i>
                                            </ListItemContent>
                                        </ListItem>
                                    ))
                                }
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;