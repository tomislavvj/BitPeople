class User {
    constructor(userData) {
        this.id = userData.login.uuid
        this.name = `${userData.name.first} ${userData.name.last}`
        this.dob = new Date(userData.dob.date).toLocaleString().split(',')[0]
        this.email = userData.email
        this.image = userData.picture.medium
        this.imgLar = userData.picture.large
        this.gender = userData.gender

    }
    getShortMail() {
        const mail = this.email.split('@')
        const firstLet = mail[0].charAt(0);
        const lastLet = mail[0].charAt(mail[0].length - 1)
        return `${firstLet}...${lastLet}${mail[1]}`
    }
}

export default User