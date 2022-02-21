class CardsComponent {
  $cards;
  $name;
  $bio;
  $img;
  $detailContainer;
  $repositoryContainer;
  $followerContainer;
  $followingContainer;
  $icon_github;
  $div_wrap1;
  $div_wrap2;
  $footerContainer;

  constructor(userIn4 = {}) {
    this.$cards = document.createElement("div");
    this.$cards.classList.add("info-container");

    let header_div = document.createElement("div");
    let header_name = document.createElement("div");

    header_div.classList.add("header-card");
    header_name.classList.add("header-card-name");

    this.$name = document.createElement("h2");

    if (userIn4.name) {
      this.$name.innerHTML = `${userIn4.login}/ <br /> <b>${userIn4.name}</b>`;
    } else {
      this.$name.innerHTML = `${userIn4.login}`;
    }

    let bio_container = document.createElement("div");
    bio_container.classList.add("bio_container");

    this.$bio = document.createElement("p");
    if (userIn4.bio) {
      this.$bio.innerHTML = `${userIn4.bio}`;
    } else {
      this.$bio.innerHTML = "";
    }
    bio_container.appendChild(this.$bio);

    this.$img = document.createElement("img");
    this.$img.src = `${userIn4.avatar_url}`;

    header_name.appendChild(this.$name);
    header_name.appendChild(bio_container);
    header_div.appendChild(header_name);
    header_div.appendChild(this.$img);

    this.$cards.appendChild(header_div);

    // repository container
    this.$repositoryContainer = document.createElement("div");
    this.$repositoryContainer.classList.add("repository-container");
    let repository = document.createElement("p");
    let repository_value = document.createElement("p");

    repository.innerHTML = "Repository";
    repository_value.innerHTML = `${userIn4.public_repos}`;

    let detail_div = document.createElement("div");

    detail_div.classList.add("detail_div");

    detail_div.appendChild(repository_value);
    detail_div.appendChild(repository);

    // folder icon
    let folder_icon = document.createElement("i");
    folder_icon.classList.add("fa-solid", "fa-folder");

    this.$repositoryContainer.appendChild(folder_icon);
    this.$repositoryContainer.appendChild(detail_div);

    // follower container
    this.$followerContainer = document.createElement("div");
    this.$followerContainer.classList.add("follower-container");
    let follower = document.createElement("p");
    let follower_value = document.createElement("p");

    follower.innerHTML = "Follower";
    follower_value.innerHTML = `${userIn4.followers}`;

    let detail_div2 = document.createElement("div");
    detail_div2.classList.add("detail_div");

    // follower icon

    let follower_icon = document.createElement("i");
    follower_icon.classList.add("fa-solid", "fa-users");

    detail_div2.appendChild(follower_value);
    detail_div2.appendChild(follower);

    this.$followerContainer.appendChild(follower_icon);
    this.$followerContainer.appendChild(detail_div2);

    // following container
    this.$followingContainer = document.createElement("div");
    this.$followingContainer.classList.add("following-container");
    let following = document.createElement("p");
    let following_value = document.createElement("p");

    following.innerHTML = "Following";
    following_value.innerHTML = `${userIn4.following}`;

    let detail_div3 = document.createElement("div");
    detail_div3.classList.add("detail_div");

    //following icon
    let following_icon = document.createElement("i");
    following_icon.classList.add("fa-solid", "fa-user-plus");

    detail_div3.appendChild(following_value);
    detail_div3.appendChild(following);

    this.$followingContainer.appendChild(following_icon);
    this.$followingContainer.appendChild(detail_div3);

    this.$detailContainer = document.createElement("div");
    this.$detailContainer.classList.add("detail-container");

    // div wrap repository container , following container , follower container
    this.$div_wrap1 = document.createElement("div");
    this.$div_wrap1.classList.add("div_wrap");

    // div wrap icon github
    this.$div_wrap2 = document.createElement("div");
    this.$div_wrap2.classList.add("div_wrap");

    this.$icon_github = document.createElement("i");
    this.$icon_github.classList.add("fa-brands", "fa-github");

    this.$detailContainer.appendChild(this.$icon_github);

    // div display color
    this.$footerContainer = document.createElement("div");
    this.$footerContainer.classList.add('footer-container');
  }

  render() {
    this.$div_wrap1.appendChild(this.$repositoryContainer);
    this.$div_wrap1.appendChild(this.$followerContainer);
    this.$div_wrap1.appendChild(this.$followingContainer);

    this.$div_wrap2.appendChild(this.$icon_github);

    this.$detailContainer.appendChild(this.$div_wrap1);
    this.$detailContainer.appendChild(this.$div_wrap2);

    this.$cards.appendChild(this.$detailContainer);
    this.$cards.appendChild(this.$footerContainer);

    return this.$cards;
  }
}

export { CardsComponent };
