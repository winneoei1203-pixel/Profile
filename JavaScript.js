// ========================================
// WINNE ACCOUNTING
// JAVASCRIPT
// ========================================



// ========================================
// MOBILE NAVBAR
// ========================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener(
    "click",
    function () {

        navLinks
            .classList
            .toggle("active");

    }
);


// Tutup navbar ketika menu diklik

document
    .querySelectorAll(
        ".nav-links a"
    )
    .forEach(

        function (link) {

            link.addEventListener(
                "click",
                function () {

                    navLinks
                        .classList
                        .remove("active");

                }
            );

        }

    );



// ========================================
// PILIH PAKET
// ========================================

function selectPackage(
    packageName
) {

    const packageInput =
        document.getElementById(
            "package"
        );


    packageInput.value =
        packageName;


    document
        .getElementById(
            "kontak"
        )
        .scrollIntoView(
            {

                behavior:
                    "smooth"

            }
        );

}



// ========================================
// KALKULATOR HARGA
// ========================================

function calculatePrice() {

    const service =
        Number(
            document
                .getElementById(
                    "service"
                )
                .value
        );


    const transactions =
        Number(
            document
                .getElementById(
                    "transactions"
                )
                .value
        );


    if (
        transactions <= 0
    ) {

        alert(
            "Silakan masukkan jumlah transaksi terlebih dahulu."
        );

        return;

    }


    let additionalCost =
        0;


    // Harga awal mencakup
    // maksimal 50 transaksi.
    // Setiap tambahan maksimal
    // 50 transaksi = Rp50.000

    if (
        transactions > 50
    ) {

        const extraTransactions =
            transactions - 50;


        const transactionBlocks =
            Math.ceil(
                extraTransactions / 50
            );


        additionalCost =
            transactionBlocks *
            50000;

    }


    const totalPrice =
        service +
        additionalCost;


    document
        .getElementById(
            "priceResult"
        )
        .innerText =
        formatRupiah(
            totalPrice
        );

}



// FORMAT RUPIAH

function formatRupiah(
    number
) {

    return new Intl.NumberFormat(

        "id-ID",

        {

            style:
                "currency",

            currency:
                "IDR",

            minimumFractionDigits:
                0

        }

    ).format(
        number
    );

}



// ========================================
// FORM KONTAK
// ========================================

function sendMessage(
    event
) {

    event.preventDefault();


    const name =
        document
            .getElementById(
                "name"
            )
            .value
            .trim();


    const email =
        document
            .getElementById(
                "email"
            )
            .value
            .trim();


    const selectedPackage =
        document
            .getElementById(
                "package"
            )
            .value;


    const message =
        document
            .getElementById(
                "message"
            )
            .value
            .trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert(
            "Silakan lengkapi data terlebih dahulu."
        );

        return;

    }


    alert(
        "Terima kasih, " +
        name +
        "! ✨ Pesan Anda berhasil dikirim."
    );


    console.log(
        "Nama:",
        name
    );


    console.log(
        "Email:",
        email
    );


    console.log(
        "Layanan:",
        selectedPackage
    );


    console.log(
        "Pesan:",
        message
    );


    document
        .getElementById(
            "contactForm"
        )
        .reset();

}



// ========================================
// SCROLL REVEAL
// ========================================

const revealElements =
    document.querySelectorAll(

        ".reveal, .reveal-left, .reveal-right"

    );


const revealObserver =
    new IntersectionObserver(

        function (
            entries
        ) {

            entries.forEach(

                function (
                    entry
                ) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry
                            .target
                            .classList
                            .add(
                                "show"
                            );

                    }

                }

            );

        },

        {

            threshold:
                0.12

        }

    );


revealElements
    .forEach(

        function (
            element
        ) {

            revealObserver
                .observe(
                    element
                );

        }

    );



// ========================================
// SKILL BAR ANIMATION
// ========================================

const skillBars =
    document.querySelectorAll(
        ".skill-progress"
    );


const skillObserver =
    new IntersectionObserver(

        function (
            entries
        ) {

            entries.forEach(

                function (
                    entry
                ) {

                    if (
                        entry.isIntersecting
                    ) {

                        const width =
                            entry
                                .target
                                .getAttribute(
                                    "data-width"
                                );


                        entry
                            .target
                            .style
                            .width =
                            width;

                    }

                }

            );

        },

        {

            threshold:
                0.5

        }

    );


skillBars
    .forEach(

        function (
            skill
        ) {

            skillObserver
                .observe(
                    skill
                );

        }

    );



// ========================================
// REVIEW WEBSITE
// ========================================

let selectedRating =
    0;


const stars =
    document.querySelectorAll(
        ".star"
    );



// PILIH RATING

stars.forEach(

    function (
        star
    ) {

        star.addEventListener(

            "click",

            function () {

                selectedRating =
                    Number(
                        this
                            .getAttribute(
                                "data-value"
                            )
                    );


                document
                    .getElementById(
                        "reviewRating"
                    )
                    .value =
                    selectedRating;


                updateStars();

            }

        );

    }

);



// WARNA BINTANG

function updateStars() {

    stars.forEach(

        function (
            star
        ) {

            const starValue =
                Number(
                    star
                        .getAttribute(
                            "data-value"
                        )
                );


            if (
                starValue <=
                selectedRating
            ) {

                star
                    .classList
                    .add(
                        "active"
                    );

            } else {

                star
                    .classList
                    .remove(
                        "active"
                    );

            }

        }

    );

}



// ========================================
// LOCAL STORAGE REVIEW
// ========================================

let reviews =
    JSON.parse(

        localStorage
            .getItem(
                "winneAccountingReviews"
            )

    ) || [];



// ========================================
// SUBMIT REVIEW
// ========================================

document
    .getElementById(
        "reviewForm"
    )
    .addEventListener(

        "submit",

        function (
            event
        ) {

            event
                .preventDefault();


            const name =
                document
                    .getElementById(
                        "reviewName"
                    )
                    .value
                    .trim();


            const message =
                document
                    .getElementById(
                        "reviewMessage"
                    )
                    .value
                    .trim();


            if (
                selectedRating === 0
            ) {

                alert(
                    "Silakan pilih rating terlebih dahulu ⭐"
                );

                return;

            }


            const review = {

                name:
                    name,

                rating:
                    selectedRating,

                message:
                    message,

                date:
                    new Date()
                        .toLocaleDateString(

                            "id-ID",

                            {

                                day:
                                    "numeric",

                                month:
                                    "long",

                                year:
                                    "numeric"

                            }

                        )

            };


            reviews.unshift(
                review
            );


            localStorage
                .setItem(

                    "winneAccountingReviews",

                    JSON.stringify(
                        reviews
                    )

                );


            displayReviews();


            document
                .getElementById(
                    "reviewForm"
                )
                .reset();


            selectedRating =
                0;


            updateStars();


            alert(
                "Terima kasih! 💜 Ulasan Anda berhasil dikirim."
            );

        }

    );



// ========================================
// DISPLAY REVIEW
// ========================================

function displayReviews() {

    const reviewList =
        document
            .getElementById(
                "reviewList"
            );


    reviewList.innerHTML =
        "";


    if (
        reviews.length === 0
    ) {

        reviewList.innerHTML =
        `
            <div class="review-card">

                <p>
                    Belum ada ulasan.
                    Jadilah orang pertama
                    yang memberikan ulasan
                    untuk website ini 💜
                </p>

            </div>
        `;


        updateAverageRating();


        return;

    }


    reviews.forEach(

        function (
            review
        ) {

            const reviewCard =
                document
                    .createElement(
                        "div"
                    );


            reviewCard
                .classList
                .add(
                    "review-card"
                );


            const reviewStars =
                "★"
                    .repeat(
                        review.rating
                    )

                +

                "☆"
                    .repeat(
                        5 -
                        review.rating
                    );


            reviewCard.innerHTML =
            `

                <div class="review-header">

                    <div class="review-user">

                        <h4>
                            ${escapeHTML(
                                review.name
                            )}
                        </h4>

                        <span class="review-date">
                            ${review.date}
                        </span>

                    </div>


                    <div class="review-stars">
                        ${reviewStars}
                    </div>

                </div>


                <p>
                    ${escapeHTML(
                        review.message
                    )}
                </p>

            `;


            reviewList
                .appendChild(
                    reviewCard
                );

        }

    );


    updateAverageRating();

}



// ========================================
// RATA-RATA RATING
// ========================================

function updateAverageRating() {

    const averageRating =
        document
            .getElementById(
                "averageRating"
            );


    const reviewCount =
        document
            .getElementById(
                "reviewCount"
            );


    const summaryStars =
        document
            .getElementById(
                "summaryStars"
            );


    reviewCount.innerText =
        reviews.length;


    if (
        reviews.length === 0
    ) {

        averageRating.innerText =
            "0.0";


        summaryStars.innerText =
            "☆☆☆☆☆";


        return;

    }


    const totalRating =
        reviews.reduce(

            function (
                total,
                review
            ) {

                return (
                    total +
                    review.rating
                );

            },

            0

        );


    const average =
        totalRating /
        reviews.length;


    averageRating.innerText =
        average
            .toFixed(
                1
            );


    const roundedRating =
        Math.round(
            average
        );


    summaryStars.innerText =

        "★"
            .repeat(
                roundedRating
            )

        +

        "☆"
            .repeat(
                5 -
                roundedRating
            );

}



// ========================================
// KEAMANAN INPUT REVIEW
// ========================================

function escapeHTML(
    text
) {

    const element =
        document
            .createElement(
                "div"
            );


    element.textContent =
        text;


    return element.innerHTML;

}



// ========================================
// PARALLAX RINGAN PAUS
// ========================================

const whaleOne =
    document.querySelector(
        ".whale-one"
    );


window.addEventListener(

    "scroll",

    function () {

        const scrollPosition =
            window.scrollY;


        if (
            whaleOne
        ) {

            whaleOne
                .style
                .marginTop =
                scrollPosition *
                0.03 +
                "px";

        }

    }

);



// ========================================
// TAMPILKAN REVIEW SAAT WEB DIBUKA
// ========================================

displayReviews();