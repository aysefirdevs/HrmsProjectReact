import React from 'react'
import { Link } from 'react-router-dom'


export default function SideBar() {
    return (
        <div>
            <div class="ui compact vertical labeled icon menu" >
                <a class="item">
                    <i class="computer icon"></i>
                    <Link to={`/job-positions`}>
                    İş Pozisyonları
                    </Link>
                </a>
                <a class="item">
                        <i class="travel icon"></i><Link to={`/employers`}>
                    İş Verenler
                    </Link>
                </a>
                
                <a class="item">
                    <i class="compass outline icon"></i><Link to={`/candidates`}>
                    İş Arayanlar</Link>
                </a>

               

            </div>
        </div>
    )
}
