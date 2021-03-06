
const getUsers = async () => {
    const response = await fetch ('https://reqres.in/api/users?page=2');
    const jsonResponse = await response.json();
    return jsonResponse.data;
    
};

const getUser = async (id) => {
    const response = await fetch ('https://reqres.in/api/users/'+id);
    const jsonResponse = await response.json();
    console.log(jsonResponse);
};

const UserService = {

        getUsers,
        getUser
}

export default UserService;