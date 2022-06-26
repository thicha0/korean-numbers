<script>
  let words = [
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'Je'
    },
    {
      id: 1,
      kr: '것',
      en: 'A thing or an object'
    },
    {
      id: 2,
      kr: '하다',
      en: 'To do'
    },
    {
      id: 3,
      kr: '있다',
      en: 'To be'
    },
    {
      id: 4,
      kr: '수',
      en: 'Way, method, number'
    },
    {
      id: 5,
      kr: '나',
      en: 'test'
    },
  ]
</script>

<h1>
  Word list
</h1>

<table style="width: 70%">
  {#each words as word}
    <tr>
      <td style="width: 15%">
        {word.id}
      </td>
      <td style="width: 30%">
        {word.kr}
      </td>
      <td style="width: 55%">
        {word.en}
      </td>
    </tr>
  {/each}
</table>

<style>
  table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
  }

  table, td {
    border: 1px solid #AAAAAA;
    background-color: #f0e9e9;
  }

  td {
    padding: 10px 20px;
    text-align: left;
  }
</style>
