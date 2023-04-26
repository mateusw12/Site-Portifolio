import React from "react";
import { ProjectCard } from ".";

const Project = () => {
  return (
    <div className="project-content">
      <ProjectCard
        cardTitle={"Padaria"}
        cardContent={
          "O sistema é desenvolvido em angular e projetado para fornecer uma simulação de sistema comercial de uma padaria." +
          "Ela permite que os usuários possam realizar operações CRUD (criar, ler, atualizar e excluir)" +
          " em dados de padaria, como produtos, funcionários e estoque."
        }
        repositoryLink={"https://github.com/mateusw12/Padaria"}
        cardImage={
          "https://static.ifood-static.com.br/image/upload/t_high/logosgde/a0faafe0-f270-40fb-a872-8d65da84651c/202008201433_4a5O_i.png"
        }
      ></ProjectCard>
      <ProjectCard
        cardTitle={"Clima Java Script"}
        cardContent={
          "Aplicação que consulta o clima atual da cidade informada, feito puramente em java script."
        }
        repositoryLink={"https://github.com/mateusw12/Clima---Js"}
        cardImage={
          "https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png"
        }
      ></ProjectCard>
      <ProjectCard
        cardTitle={"Hospital System"}
        cardContent={
          "O sistema é desenvolvido em angular é projetado para fornecer uma simulação de sistema comercial de um hospital." +
          "Ela permite que os usuários possam realizar operações CRUD (criar, ler, atualizar e excluir)" +
          " em dados de hospital, como pacientes, usuarios e internações."
        }
        repositoryLink={"https://github.com/mateusw12/Hospital-System"}
        cardImage={
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAllBMVEX4+Pj/LFD4///4+/v49/j4//7/J0z/K0//IUn4/Pv/JEv/HUf/HEb/GET49ff4+/z47/L56+7/E0H+Smb6ztX55en52t//NFX+UWz52N3+Q2H54OT+TWj+WHH6vsf7rLj9cYb6xs79aX//ADn7n638hJb+X3b9eIv7rbj+PVz8lKP50dj8ipr9bYP8kaH8m6n7uMH/ADL7FM94AAALl0lEQVR4nO2daZuiuhaFJWEKk4ACCk5QgnPp/f9/7oIyBIhIlZbC6bz94fTjQSSblZ2VnUAPBhQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAoFAqFQqH0HwQ4EMMBBB8dmR/66MgeATmoGdPFcn0+r5eLqaHFH7CkA9kB4oaadVgsz/GhW9/WWfgwZD0AAvaw3IwEM0OVRpvlgQWodigC2ni9csX8UJOZhVt72HM9IHb6PeMVURCYHIEXFX50nLLlKCBtHLqSIlUPFSZnb9DbKLDccBGIKs8Q4FUluAy5/FgwWEaqQjxUMoXNmCCbPoAGi5EqkVqVtW12SbWAtKVLjtVNDqIyH/dRC8AKlIYI3KKwskFy6Dgy70fgiihudPDpJv0QxJ5VsblZ16aZZ40zwkcRSJD5bb+UgPSVKlQaISTUmqaexnO19inpUEEN2R5FAR0cpXT5oqoIu9lkPtsxqiqWmieWRcDLquLsZvPJaCdUDzVdqzepEfgO1q44ozmn9diz9BjLG68Dp9K24lBZ2a2WY8uIjzQMzz9HTCmrSq7NPf75LoAWWBMFldn4eux8MxnHPljzQ6bWVWIJmLvv8QDkwyCMDbOxWEmYpCTm0AslIF8q2ic7R2tY68UIWntHrmrAXRtlZ8wOEq9sh0yRXXnH7kFOQFMm7wi8GXpkpwuBFZYcgSTt7wx+EExPZh5VybU6HwSoF7lAHPkNUx5wcIv7K0/suyKPxXDZ5WlBnBDnW12CXeXd14yMxgyGjJWZHvp11BrvLmeN8gHU/O62WWLBGbtW7dHh4HhVgiCtHzUL6pv8xPKl04MDsvKea4Ytbtdw/z9VVL+2wxb6DrIg8MzzF/p3sGwg5ioYtvkGOBw3314rcWubrJeZxw6nReRnA544b5e5WMhBrmWL9F2ebTs8QAI3Td+8a7z+7Mh20o4mB51Ni9DP8ry5+IuLBOvs/IrXVbvInlIZyJuXhgDG/nqge/Z0Okt7g9LVjADtrL++0tBCxBr+fjN3HSc+cfoDwu4P+torAPt09FKPL5MBB+xlwJimwpfnWOp6AMgF+o/CwtFNBwL/qt6KtEXAKxJpoi25ewt2LinAaZoNxFUra/AQxG3n5t2CHK8yx3bG4o2gbdoVlMUL7g8Lh/7kQZ1RlvcG6lSHgOHtngnOK/IVpx3lB2XpJC24405JQZvc7poYveCygO/UK60EhK+wecb5XozUxakvmNuCrVTuBoKopmuQcqV/qEHzDP2dIDsbGRfcs30UhibeTFEVJuH5svDH/mX5HezKi3IyM+3K+AAyoyzerwi1RMNDIMh8tPV0yCEEIYr/w1rj0MXLzbwz7ogSwCW9cMd6UgbDExYC1dl7AMBBfk42MU6DS2AWUeD5QyeGBxYsb1f+rI1lcRVIzNGApJyHWH+u5N6Jd7xOJMZsUic8OW0erooBwZzbd/Mrx67FotA605/60RfxohhgdUNBWWtNjhNMJ7mLFIMOCOFFfWFYhIDnLw8GWU6P8m7ztfy8WWK5LCcy1u/PohcdgXcOj1uF547D55XAjdPLkX8/XOMqkPw2bRpG2Tdie/rxsQF5aT3VvPz2YrQTroJ2Y74WZGXcrw4sO+Re+dcVFDwX+G2WHAbJYlXmqvn558cGLbpdjDT5XQzY089yQQrnZyOkuv14WoTHmyoF5leGRcNUIIx/cAYUpl+U3M/H4JLVULZJUvxhThgGmArIRYE7Z4QGkxpGs1Ua/Uugl14KH+i6oWtEj3sHFlcBTxzl0EAz4rOi2qDDgnWaFuXw0zEYgHnaM4WJwzizzaX9jsIhngt8wteAsT258Xxs/j0GtfmRtUuj//mKO1hmDbluwxOV3bZlh9DxXDCt30yorx1VSk7Ky+J8WjXQ4FiULp5vxlNAjykjmKtWhS5smsQzfr0Z0IiKzTiMKFRtMZym9kxps97/twzDyj4rRpm3UGfJIBNMJvR2pQq78LWuRJZNS5nS6OMxQAelEgNG3Tw0jaVpEimzs1E1tPKifFb0nQ3L700IhKZBr74iYm4fLLho+KA4rXcEFu1rFWZBLltCtEiDr7xzdEweOKr9XL0vxO0aNeuAxVTAkKxRMfzj8jqXugy000PUy9vKq1Bbu05U22NQzYlXvhpzdUkFRINcbDrAhVAp1Ojp6Kis31dYDFSel9Rl+baBC2lZRG3K1bg1ulMAgAFpyVEp79lFk5s1kY/v0gFKS0ZKeZsBCGspMWlbdP/OtDDIA8MlLTub5d18ILoFSgxfs9z7GDbgiRdCvGPC6O6U9pE1umI7hJNWJ+jZT0ubd8VAmxMrBdnNqMTgbo21rIJ7WYMcg4obAif57THgiReyqg8LcfMmd7ar4taIuaeCZDJA1EF5UROc0955flc+0NK+oJS3XoFvUk4UA/JlPTLI+Y9NSJsQzHLNObbpyVG8/EQ992cMN7csXFllR2NSDEzyXmT91GyQc8iZVqjUaeDBVVXVfd/CI0orRvyofCHEFG7ahC7KDltXjfK1XBw+qHYwZFzOF+N9C9BcPkn2Kp/XL1cmZim9ZJAbDAQLLVJfMP16aznwzokzWqQtkCuXwrrV7TMCaWsx+9Ag50B9Rhhs5FdsdXkO6KW3Rt6XYwBtp7J9xCStl5UNctPdg9aMMNaIo4/Xi2KBurem1sa94VjElcDLy7pm2RYGOQVqI4IKRKcLjzSB7FECs/qoHWdHX1kUeHO3IFQP2lmjhDgX5CrI96mK5qYLG/JYkCWEevEKsss5r8iirIijvU64X7hBbrBGyan0QgXiaCQrsiwrQrQYdGP7kZGZN8er/T8wOGy/w+PS10iJq8006QY0iu0Fsmvo/vp43F+m8NNl04xsTSmerBKaAVHyShfiluqSQW7c3Q6NQgVyZCE22cHPdUMCV+D463Z1ws+epsDXEZhx0zfLKujks95gkm3QDn6Qn0rWqGkLX2yNMBXMjQ6MA3WKmpHcfhNMaZr0wBphW41GnVTBIPE52RD41XbbdFkFTQYZWW4+KMpzvaMhKDICw7utUkLJGjmNKkD6DHu8uRtbD4nkPomRnBbzNaj9YJpUGGR5QvIYncHKZ8rS7NHrKViIDYqS02yQ9WLmJc47rIJBsgnmK28V8yAnAG+WV0KEXdNGmzgXYIPiqNMqGCTPseWSFaR9wzucELxgq6bKA1/glqzR6y/7tbCromaiRuN773YDXogtnTNS04I8wq3RqJu+oIyGVdMlcTUlaAEhb8+XJ8BKdC8IbFkFfQhBUuXBCp6ysFpot9fasLd16djgj49O7RU4SnDnZU/9U8HgOuLhVV/JlE7LqaWzEMKBZtmX0DFlQp1VnZOUEA+KvVNBQhyEUh1VEFVpNw82m80pcgW1/ABW8dokOSB0m4pB7ksIkir5svaCQEESRVGqloMFJRzlR6pRddQrq6C7BpkI57ttHkUUhe1wWrzJQowqSoD6CDPIPVLBFU478qSVRhxJXVlgwFnOHSWUJ8uTfqngCpwG0p3XwF3hlYl/fWMYN3XJSsANsjzvvjUiALnxSrzzhDavqtGCTe0xZzGFEoJsdIgN8qxHBvkecOidJ7V3FQiSLI7C2DvlxSZk4zc8VUJsjYoPe2CQ74KAdlifHPPLNK9VcDX+mxDtfb3soTlPqCqhPE3qjS8gkzyJ6y2W32HsD8Lj+mJr8SfVnYzIKwYAJTFLPTTID0AoqYFzIP5z56V5uBJi2wz6aJBbwDY+woEsF1OCjaugr+nw53A29p7J4q/yrG/W6BkQ5otzlKiH1ugJOHtXdRNiP63RE3DWrlJZ6dk06RVwtlt6o0efrdGvwW0zo8z+PRUkIDs3S7EK/qERASdXQjxN+idVkBDbZvk6bfjvuMOfw3mTeGZ1+pdDcH3n+KF3/8DGy0H1V9JTKBQKhUKhUCgUCoVCoVAoFAqFQqFQKBQKhUKhUCgUCoVCoVAo/wX+D5gtuE2q+4KrAAAAAElFTkSuQmCC"
        }
      ></ProjectCard>
      <ProjectCard
        cardTitle={"Player Music"}
        cardContent={
          "Projeto tocador de música feito puramente em java script."
        }
        repositoryLink={"https://github.com/mateusw12/PlayerMusic"}
        cardImage={
          "https://static.vecteezy.com/system/resources/previews/011/480/184/original/music-player-app-musical-note-icon-isolated-on-square-background-vector.jpg"
        }
      ></ProjectCard>
      <ProjectCard
        cardTitle={"Youtube Clone"}
        cardContent={
          "Primeiro projeto feito em React, é um clone do Youtube, usando as melhores boas práticas." +
          "Para utilização de dados é usado a api gratuita do Youtube"
        }
        repositoryLink={"https://github.com/mateusw12/Youtube-Clone"}
        cardImage={
          "https://static.vecteezy.com/ti/vetor-gratis/p3/3399771-youtube-icon-editorial-vector-gratis-vetor.jpg"
        }
      ></ProjectCard>
    </div>
  );
};

export default Project;
