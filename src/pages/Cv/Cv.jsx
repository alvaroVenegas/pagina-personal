import { experience } from "../../data";
import { formation } from "../../data"


const Cv = () => {

    return (
        <div>

            <div>
                {formation.map(item => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p>{item.years}</p>
                            <p>{item.name}</p>
                            <p>{item.company}</p>
                        </div>
                    )
                })}
            </div>
            <div>
                {experience.map(item => {
                    return (
                        <div key={JSON.stringify(item)}>
                            <p>{item.years}</p>
                            <p>{item.name}</p>
                            <p>{item.company}</p>
                            <p>{item.functions}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    )

}
export default Cv;
