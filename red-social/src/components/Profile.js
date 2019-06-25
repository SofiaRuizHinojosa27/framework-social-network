import React, {Component} from "react";
import NavBarFeed from "./NavBarFeed";
import './Profile.css';
import Veggie from '../veggie.jpg';
	

export class Profile extends Component{
	    
render(){
console.log(this.props.user)
	return(
	    <div>
	        <NavBarFeed/>
            <div className="Profile">
            <div class="ui stackable two column grid">
            <div class="column">
                <div class="ui segment">
                        <div class="ui card">
                        <div class="image"><img src={this.props.user.photo} alt={this.props.user.name}/></div>
                        <div class="content">
                            <div class="header">{this.props.user.name}</div>
                            <div class="description">{this.props.user.email}</div>
                        </div>
                        <div class="extra content">
                            <a>
                            <i aria-hidden="true" class="user icon"></i>
                            10 Veggie Amigos
                            </a>
                        </div>
                        </div>
                </div>
            </div>

            <div class="column">
                <div class="ui segment">
                <div class="ui comments">
                <h3 class="ui dividing header">Comments</h3>
                    <div class="comment">
                    <div class="avatar"><img src={Veggie} /></div>
                    <div class="content">
                        <a class="author">Melisa</a>
                        <div class="metadata"><div>Hoy</div></div>
                        <div class="text">Saludos</div>
                        <div class="actions"><a class="">Responde</a></div>
                    </div>
                    </div>
                    <div class="comment">
                    <div class="avatar"><img src={Veggie} /></div>
                    <div class="content">
                        <a class="author">Raul</a>
                        <div class="metadata"><div>Ayer</div></div>
                        <div class="text"><p>Nos vemos el viernes en casa de Lau</p></div>
                        <div class="actions"><a class="">Responde</a></div>
                    </div>
                    <div class="comment">
                    <div class="avatar"><img src={Veggie}/></div>
                    <div class="content">
                        <a class="author">Laura</a>
                        <div class="metadata"><div>Justo ahora</div></div>
                        <div class="text">Si fiesta en mi casa!</div>
                        <div class="actions"><a class="">Responde</a></div>
                    </div>
                    </div>
                    </div>
                    <div class="comment">
                    <div class="avatar"><img src={Veggie} /></div>
                    <div class="content">
                        <a class="author">Wen Glz</a>
                        <div class="metadata"><div>Hace 3 días</div></div>
                        <div class="text">¿Cafe el jueves?</div>
                        <div class="actions"><a class="">Responde</a></div>
                    </div>
                    </div>
                    <form class="ui reply form">
                        <div class="field"><textarea rows="3"></textarea></div>
                        <button class="ui icon primary left labeled button">
                        <i aria-hidden="true" class="edit icon"></i>
                        ¡Agrega Respuesta!
                        </button>
                    </form>
                </div>                        
                </div>
            </div>
            </div>
            </div>
            </div>
	        )
	    }
	}
	

export default Profile; 
