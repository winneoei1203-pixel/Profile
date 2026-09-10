// ========================================
// WINNE ACCOUNTING
// JAVASCRIPT + FIREBASE FIRESTORE
// ========================================


// ========================================
// FIREBASE CONFIGURATION
// ========================================

const firebaseConfig = {
    apiKey: "AIzaSyDBPjfPTb5mY0oG_Th2_vy3OBsX_5z21N8",
    authDomain: "winne-accounting.firebaseapp.com",
    projectId: "winne-accounting",
    storageBucket: "winne-accounting.firebasestorage.app",
    messagingSenderId: "979976444232",
    appId: "1:979976444232:web:f4099715d4c0b4493f3b7d"
};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);


// Initialize Firestore

const db =
    firebase.firestore();



// ========================================
// MOBILE NAVBAR
// ========================================

const menuButton =
    document.getElementById("menuButton");


const navLinks =
    document.getElementById("navLinks");


if (
    menuButton &&
    navLinks
) {

    menuButton.addEventListener(
        "click",
        function () {

            navLinks
                .classList
                .toggle("active");

        }
    );

}


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

                    if (
                        navLinks
                    ) {

                        navLinks
                            .classList
                            .remove("active");

                    }

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


    if (
        packageInput
    ) {

        packageInput.value =
            packageName;

    }


    const contactSection =
        document.getElementById(
            "kontak"
        );


    if (
        contactSection
    ) {

        contactSection
            .scrollIntoView(
                {
                    behavior:
                        "smooth"
                }
            );

    }

}



// ========================================
// KALKULATOR HARGA
// ========================================

function calculatePrice() {

    const serviceElement =
        document.getElementById(
            "service"
        );


    const transactionElement =
        document.getElementById(
            "transactions"
        );


    const resultElement =
        document.getElementById(
            "priceResult"
        );


    if (
        !serviceElement ||
        !transactionElement ||
        !resultElement
    ) {

        return;

    }


    const service =
        Number(
            serviceElement.value
        );


    const transactions =
        Number(
            transactionElement.value
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
    //
    // Setiap tambahan 50 transaksi
    // dikenakan Rp50.000.

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


    resultElement.innerText =
        formatRupiah(
            totalPrice
        );

}



// ========================================
// FORMAT RUPIAH
// ========================================

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


    const nameElement =
        document.getElementById(
            "name"
        );


    const emailElement =
        document.getElementById(
            "email"
        );


    const packageElement =
        document.getElementById(
            "package"
        );


    const messageElement =
        document.getElementById(
            "message"
        );


    if (
        !nameElement ||
        !emailElement ||
        !messageElement
    ) {

        return;

    }


    const name =
        nameElement
            .value
            .trim();


    const email =
        emailElement
            .value
            .trim();


    const selectedPackage =
        packageElement
            ? packageElement.value
            : "";


    const message =
        messageElement
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


    const contactForm =
        document.getElementById(
            "contactForm"
        );


    if (
        contactForm
    ) {

        contactForm.reset();

    }

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
// FIREBASE FIRESTORE
// ========================================

let selectedRating =
    0;


let publicReviews =
    [];


const stars =
    document.querySelectorAll(
        ".star"
    );



// ========================================
// PILIH RATING BINTANG
// ========================================

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


                const reviewRating =
                    document.getElementById(
                        "reviewRating"
                    );


                if (
                    reviewRating
                ) {

                    reviewRating.value =
                        selectedRating;

                }


                updateStars();

            }

        );

    }

);



// ========================================
// WARNA BINTANG
// ========================================

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

            }

            else {

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
// SUBMIT REVIEW KE FIREBASE
// ========================================

const reviewForm =
    document.getElementById(
        "reviewForm"
    );


if (
    reviewForm
) {

    reviewForm.addEventListener(

        "submit",

        async function (
            event
        ) {

            event.preventDefault();


            const nameElement =
                document.getElementById(
                    "reviewName"
                );


            const messageElement =
                document.getElementById(
                    "reviewMessage"
                );


            if (
                !nameElement ||
                !messageElement
            ) {

                return;

            }


            const name =
                nameElement
                    .value
                    .trim();


            const message =
                messageElement
                    .value
                    .trim();


            if (
                name === ""
            ) {

                alert(
                    "Silakan masukkan nama Anda."
                );

                return;

            }


            if (
                selectedRating === 0
            ) {

                alert(
                    "Silakan pilih rating terlebih dahulu ⭐"
                );

                return;

            }


            if (
                message === ""
            ) {

                alert(
                    "Silakan tuliskan ulasan terlebih dahulu."
                );

                return;

            }


            if (
                name.length > 50
            ) {

                alert(
                    "Nama maksimal 50 karakter."
                );

                return;

            }


            if (
                message.length > 500
            ) {

                alert(
                    "Ulasan maksimal 500 karakter."
                );

                return;

            }


            const submitButton =
                reviewForm
                    .querySelector(
                        'button[type="submit"]'
                    );


            const originalButtonText =
                submitButton
                    ? submitButton.innerHTML
                    : "";


            try {

                if (
                    submitButton
                ) {

                    submitButton.disabled =
                        true;


                    submitButton.innerHTML =
                        "Mengirim ulasan...";

                }


                // SIMPAN REVIEW KE FIRESTORE

                await db
                    .collection(
                        "reviews"
                    )
                    .add(
                        {

                            name:
                                name,

                            rating:
                                selectedRating,

                            message:
                                message,

                            createdAt:
                                firebase
                                    .firestore
                                    .FieldValue
                                    .serverTimestamp()

                        }
                    );


                // RESET FORM

                reviewForm.reset();


                selectedRating =
                    0;


                updateStars();


                alert(
                    "Terima kasih! 💜 Ulasan Anda berhasil dipublikasikan."
                );

            }

            catch (
                error
            ) {

                console.error(
                    "Gagal mengirim review:",
                    error
                );


                alert(
                    "Ulasan gagal dikirim. Silakan coba lagi."
                );

            }

            finally {

                if (
                    submitButton
                ) {

                    submitButton.disabled =
                        false;


                    submitButton.innerHTML =
                        originalButtonText;

                }

            }

        }

    );

}



// ========================================
// AMBIL REVIEW PUBLIK SECARA REAL-TIME
// ========================================

function listenToReviews() {

    db
        .collection(
            "reviews"
        )
        .orderBy(
            "createdAt",
            "desc"
        )
        .limit(
            50
        )
        .onSnapshot(

            function (
                snapshot
            ) {

                publicReviews =
                    [];


                snapshot.forEach(

                    function (
                        document
                    ) {

                        const data =
                            document.data();


                        publicReviews.push(
                            {

                                id:
                                    document.id,

                                name:
                                    data.name,

                                rating:
                                    data.rating,

                                message:
                                    data.message,

                                createdAt:
                                    data.createdAt

                            }
                        );

                    }

                );


                displayReviews();


                updateAverageRating();

            },

            function (
                error
            ) {

                console.error(
                    "Gagal mengambil review:",
                    error
                );


                const reviewList =
                    document.getElementById(
                        "reviewList"
                    );


                if (
                    reviewList
                ) {

                    reviewList.innerHTML =
                    `
                        <div class="review-card">

                            <p>
                                Ulasan belum dapat dimuat.
                                Silakan refresh halaman.
                            </p>

                        </div>
                    `;

                }

            }

        );

}



// ========================================
// TAMPILKAN REVIEW
// ========================================

function displayReviews() {

    const reviewList =
        document.getElementById(
            "reviewList"
        );


    if (
        !reviewList
    ) {

        return;

    }


    reviewList.innerHTML =
        "";


    if (
        publicReviews.length === 0
    ) {

        reviewList.innerHTML =
        `

            <div class="review-card">

                <p>
                    Belum ada ulasan.
                    Jadilah orang pertama
                    yang memberikan ulasan
                    untuk Winne Accounting 💜
                </p>

            </div>

        `;


        return;

    }


    publicReviews.forEach(

        function (
            review
        ) {

            const reviewCard =
                document.createElement(
                    "div"
                );


            reviewCard.classList.add(
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


            const reviewDate =
                formatReviewDate(
                    review.createdAt
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

                            ${reviewDate}

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


            reviewList.appendChild(
                reviewCard
            );

        }

    );

}



// ========================================
// FORMAT TANGGAL FIREBASE
// ========================================

function formatReviewDate(
    timestamp
) {

    if (
        !timestamp
    ) {

        return "Baru saja";

    }


    try {

        const date =
            timestamp.toDate();


        return date
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

            );

    }

    catch (
        error
    ) {

        return "Baru saja";

    }

}



// ========================================
// HITUNG RATA-RATA RATING
// ========================================

function updateAverageRating() {

    const averageRating =
        document.getElementById(
            "averageRating"
        );


    const reviewCount =
        document.getElementById(
            "reviewCount"
        );


    const summaryStars =
        document.getElementById(
            "summaryStars"
        );


    if (
        !averageRating ||
        !reviewCount ||
        !summaryStars
    ) {

        return;

    }


    reviewCount.innerText =
        publicReviews.length;


    if (
        publicReviews.length === 0
    ) {

        averageRating.innerText =
            "0.0";


        summaryStars.innerText =
            "☆☆☆☆☆";


        return;

    }


    const totalRating =
        publicReviews.reduce(

            function (
                total,
                review
            ) {

                return (
                    total +
                    Number(
                        review.rating
                    )
                );

            },

            0

        );


    const average =
        totalRating /
        publicReviews.length;


    averageRating.innerText =
        average.toFixed(
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
        document.createElement(
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
// MULAI MENDENGARKAN REVIEW FIREBASE
// ========================================

listenToReviews();