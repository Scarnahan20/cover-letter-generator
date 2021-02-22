function Form() {
    return(
        <form>
            <label for="companyName">Company Name</label>
            <br />
            <input type="text" id="companyName" name="companyName"></input>
            <br />
            <label for="jobTitle">Job Title</label>
            <br />
            <input type="text" id="jobTitle" name="jobTitle"></input>
            <br /> <br />
            <input type="submit" value="Generate!"></input>
        </form>
    );
}

export default Form;