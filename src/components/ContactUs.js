const ContactUS = () => {
    return (
        <div className="w-9/12 m-auto text-center">
            <h1 className="font-bold text-lg">Contact US</h1>
            <p>This is Contact Us Page</p>
            <form className="flex flex-col items-center">
                <input type="text" placeholder="Name" className="m-2 p-2 border border-gray-300 rounded-lg w-1/2" />
                <input type="email" placeholder="Email" className="m-2 p-   2 border border-gray-300 rounded-lg w-1/2" />       
                <textarea placeholder="Message" className="m-2 p-2 border border-gray-300 rounded-lg w-1/2 h-32"></textarea>
                <button type="submit" className="m-2 p-2 bg-blue-100 rounded-lg hover:bg-blue-200 hover:cursor-pointer">
                    Submit </button>
            </form>
        </div>
    )
}

export default ContactUS;