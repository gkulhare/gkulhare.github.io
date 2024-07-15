import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return (
        <div className="relative h-full w-full">
            <div class="absolute right-0 bottom-0 flex space-x-4">
                <a href="https://linkedin.com/in/yourprofile" class="text-white hover:text-indigo-500">
                    <FontAwesomeIcon icon={faSquareGithub} className="fa-2x"/>
                </a>
                <a href="https://linkedin.com/in/yourprofile" class="text-white hover:text-indigo-500">
                    <FontAwesomeIcon icon={faLinkedin} className="fa-2x"/>
                </a>
                <a href="https://linkedin.com/in/yourprofile" class="text-white hover:text-indigo-500">
                    <FontAwesomeIcon icon={faEnvelope} className="fa-2x"/>
                </a>
            </div>
        </div>
    )
}