import React, { useContext } from "react";
import { toast } from "react-toastify";
import { twMerge } from 'tailwind-merge';

import { useAuth } from "../utilities/use-auth";
import { Toast } from '../components';
import Container from "../components/Container";
import LoaderCard from "../components/LoaderCard";


interface HomeProps {

}


const Home = (props: HomeProps) => {
    const { authenticated } = useAuth();

    const testToast = () => {
        // Toast.success('Joooo!s')
        Toast.error('NOOOOOOOOOO!s')
    }

    return (
        <>


            <Container className='p-8' id="mycustomID">
            <h1>Home {authenticated ? "Logged in" : "Lot logged"}</h1>
            <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, est, reiciendis dolorem similique aliquam ex accusamus odit provident illum explicabo dolorum omnis! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, doloribus? Corporis voluptate expedita sapiente aliquid assumenda sit at autem ratione, quas labore cum doloribus odit dignissimos similique repellat laborum dolorum?
                        Autem asperiores, ea error nulla a eos. Perspiciatis eos accusamus officiis dolorem quos alias corporis, consequatur cumque a labore eius obcaecati nisi non, veniam quae fugiat repellat vero qui quod!
                        Eaque quibusdam enim ullam molestiae assumenda tempora fuga magni explicabo nulla quia? Maiores delectus corrupti officia illum velit hic facilis repellendus possimus dicta aliquam suscipit sunt, repudiandae veniam doloribus dolor!
                        Voluptas asperiores labore quas culpa a nihil architecto dolor placeat natus hic voluptate temporibus vero soluta eos, magni commodi illo dolores possimus, quod nesciunt repellendus numquam aperiam. Saepe, voluptatem mollitia.
                        Alias facilis laborum odio numquam quisquam consectetur nostrum voluptatem incidunt fugiat quos autem nam libero exercitationem mollitia qui tempora aut maiores, perspiciatis, magnam sit inventore animi. Magnam voluptates saepe fuga!
                        Corrupti eius in iusto consequuntur. Consequatur possimus magni quas repudiandae sint doloremque quisquam velit fugiat est corrupti eum, modi qui vero! Nostrum at esse iusto saepe, doloremque quasi accusamus natus.
                        Atque dolor magni esse laudantium eum tempore libero animi numquam autem est maiores nobis suscipit assumenda, similique aliquam dolores expedita deleniti aperiam soluta sequi corrupti totam. Culpa optio amet aut.
                        Unde ad dicta aliquam voluptatum magni libero incidunt amet voluptatem dignissimos minus aperiam fugiat officia, modi sit animi ullam sapiente sed tempora consequuntur molestias sequi enim nemo laboriosam? Totam, qui.
                        Libero laudantium voluptas omnis explicabo culpa deserunt quam doloremque dicta tenetur laborum cumque sunt commodi soluta quasi labore, quas, temporibus ea? Tempore, mollitia aliquid. Hic mollitia quis odit eius iure.
                        Aspernatur natus illum velit asperiores laudantium culpa numquam, saepe reiciendis blanditiis. Id, optio vitae quaerat autem eveniet quas eos architecto dicta cumque vel. Velit perspiciatis nostrum delectus reprehenderit accusantium facere?</p>
                <button onClick={testToast} className="btn btn-primary">Test button</button>
            </div>
            </Container>
        </>
    )
}

export default Home;